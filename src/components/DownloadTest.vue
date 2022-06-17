 <template>
  <div class="content" ref="addImage">
    <div ref="capture" class="image-content">
      <p>html2canvas 能夠實現在前端直接對頁面進行截屏。</p>
      <p>
        其實現思路是html2canvas腳本將頁面元素渲染為canvas，通過讀取DOM並將不同的樣式應用到這些元素上實現。
      </p>
      <p>它不需要服務端的操作，只在前端即可完成。</p>
    </div>
    <div @click="generatorImage" class="img-btn">生成圖片</div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "DownloadTest",
  methods: {
    generatorImage() {
      html2canvas(this.$refs.capture).then((canvas) => {
        this.$refs.addImage.append(canvas);
        let link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.setAttribute("download", "圖片canvas.png");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
      });
    },
  },
};
</script> 