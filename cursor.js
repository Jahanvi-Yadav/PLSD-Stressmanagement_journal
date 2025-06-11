    <!-- ⭐ Magical Cursor Sparkle Js Script -->
    <script>
        document.addEventListener("mousemove", function (e) {
            const sparkle = document.createElement("div");
            sparkle.className = "sparkle";
            sparkle.style.left = e.pageX + "px";
            sparkle.style.top = e.pageY + "px";
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 600);
        });
    </script>
