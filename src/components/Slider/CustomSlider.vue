<template>
  <div class="sliderContainer">
    <div class="slideWrap">
      <div class="slider" ref="slider">
        <ul>
          <li v-for="(item, idx) in list" :key="idx">
            <h2>{{ `${item.name}_${idx}` }}</h2>
          </li>
        </ul>
      </div>
      <div class="pagination">
        <span v-on:click="prevSlider">prev</span>
        <span v-on:click="nextSlider">next</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      sliderWidth: 500,
      nowSliderIndex: 0,
    };
  },
  watch: {
    nowSliderIndex(val) {
      if (val >= this.sliderSize) {
        this.nowSliderIndex = this.sliderSize - 1;
      } else if (val < 0) {
        this.nowSliderIndex = 0;
      } else {
        this.$refs.slider.style.left = `${this.nowSliderWidth * -1}px`;
      }
    },
    "list.length"(val) {
      console.log(val, "도달하니?");
      this.nowSliderIndex = 0;
    },
  },
  computed: {
    sliderSize() {
      return Array.isArray(this.list) ? this.list.length : 1;
    },
    nowSliderWidth() {
      return this.sliderWidth * this.nowSliderIndex;
    },
  },
  methods: {
    prevSlider() {
      this.nowSliderIndex -= 1;
    },
    nextSlider() {
      this.nowSliderIndex += 1;
    },
  },
  created() {
    this.list = new Array(3).fill({ idx: 0, name: "hm" }).map((e, i) => {
      return {
        ...e,
        idx: i,
      };
    });
  },
};
</script>

<style lang="scss" scoped>
$slideWidth: 500px;
$slideCount: 3;
$slideHeight: 300px;

.slideWrap {
  width: $slideWidth;
  height: $slideHeight;
  position: relative;
  margin: 50px auto;
  background-color: aquamarine;
  // overflow: hidden;
  overflow: hidden;
  & .slider {
    position: absolute;
    left: 0;
    top: 0;
    width: $slideWidth * $slideCount;
    transition: left 0.5s ease-out;

    & > ul {
      display: flex;
      & > li {
        width: $slideWidth;

        & > h2 {
          height: $slideHeight;
          font-weight: 500;
          font-size: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  & .pagination {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: $slideWidth / 2;
    left: $slideWidth / 4;

    top: 90%;
    align-items: center;
  }
}
</style>
