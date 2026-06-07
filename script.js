const input = document.getElementById("videoInput");
const preview = document.getElementById("preview");
const reverseBtn = document.getElementById("reverseBtn");
const downloadBtn = document.getElementById("downloadBtn");
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("status");

let uploadedFile = null;
let outputURL = null;

input.addEventListener("change", () => {
    uploadedFile = input.files[0];

    if (!uploadedFile) return;

    preview.src = URL.createObjectURL(uploadedFile);
    statusText.textContent = "Vídeo carregado.";
});

reverseBtn.addEventListener("click", async () => {

    if (!uploadedFile) {
        alert("Escolha um vídeo primeiro.");
        return;
    }

    try {

        statusText.textContent = "Carregando FFmpeg...";

        const { FFmpeg } = FFmpegWASM;

        const ffmpeg = new FFmpeg();

        await ffmpeg.load();

        ffmpeg.on("progress", ({ progress }) => {
            progressBar.style.width = `${Math.round(progress * 100)}%`;
        });

        statusText.textContent = "Processando vídeo...";

        const data = new Uint8Array(
            await uploadedFile.arrayBuffer()
        );

        await ffmpeg.writeFile(
            "input.mp4",
            data
        );

        await ffmpeg.exec([
            "-i",
            "input.mp4",
            "-vf",
            "reverse",
            "-af",
            "areverse",
            "output.mp4"
        ]);

        const output = await ffmpeg.readFile(
            "output.mp4"
        );

        const blob = new Blob(
            [output.buffer],
            { type: "video/mp4" }
        );

        outputURL = URL.createObjectURL(blob);

        preview.src = outputURL;

        statusText.textContent =
            "Reverse concluído!";

    } catch (err) {

        console.error(err);

        statusText.textContent =
            "Erro ao processar vídeo.";

    }
});

downloadBtn.addEventListener("click", () => {

    if (!outputURL) {
        alert("Nenhum vídeo processado.");
        return;
    }

    const a = document.createElement("a");

    a.href = outputURL;
    a.download = "reverse.mp4";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

});
