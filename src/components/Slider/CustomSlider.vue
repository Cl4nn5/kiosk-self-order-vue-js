<template>
  <div class="sliderContainer" ref="container">
    <div class="slideWrap" :style="[styleSlideWidth, styleSlideHeight]">
      <div class="slider" :style="[styleSliderFullSize]" ref="slider">
        <ul>
          <!-- <li v-for="(item, idx) in list" :key="idx" :style="styleSlideWidth">
            <h2 :style="styleSlideHeight">{{ `${item.name}_${item.idx}` }}</h2>
          </li> -->
          <SliderItem
            v-for="(item, idx) in list"
            :slideWidth="styleSlideWidth"
            :slideHeight="styleSlideHeight"
            :key="idx"
            :propsItem="item"
          />
        </ul>
      </div>
      <div v-if="isPagination" class="pagination" :style="stylePagination">
        <span v-on:click="prevSlider">prev</span>
        <span v-on:click="nextSlider">next</span>
      </div>
    </div>
  </div>
</template>

<script>
import SliderItem from "./SliderItem.vue";
// slideWidth
// slideHeight
export default {
  components: {
    SliderItem,
  },
  props: {
    slideWidth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      list: [],
      sliderHeight: 300,
      sliderWidth: this.slideWidth,
      nowSliderIndex: 0,
      isPagination: true,
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
    "list.length"(val, oldval) {
      console.log(val, "그리고", oldval);
      if (oldval > val) {
        this.nowSliderIndex = val - 1;
      } else {
        this.nowSliderIndex = 0;
      }
    },
  },
  computed: {
    sliderSize() {
      return Array.isArray(this.list) ? this.list.length : 1;
    },
    nowSliderWidth() {
      return this.sliderWidth * this.nowSliderIndex;
    },
    //#region style Computed
    styleSlideWidth() {
      return {
        width: `${this.sliderWidth}px`,
      };
    },
    styleSlideHeight() {
      return {
        height: `${this.sliderHeight}px`,
      };
    },
    styleSliderFullSize() {
      return {
        width: `${this.sliderWidth * this.sliderSize}px`,
      };
    },
    stylePagination() {
      return {
        width: `${this.sliderWidth / 2}px`,
        left: `${this.sliderWidth / 4}px`,
      };
    },
    //#endregion
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
  mounted() {
    if (!!this.sliderWidth === false) {
      this.sliderWidth = this.$refs.container.clientWidth;
    }
  },
};
</script>

<style lang="scss">
// $slideWidth: 500px;
// $slideCount: 3;
// $slideHeight: 300px;

.slideWrap {
  // width: $slideWidth;
  // height: $slideHeight;
  position: relative;
  margin: 50px auto;
  background-color: aquamarine;
  // overflow: hidden;
  overflow: hidden;
  & .slider {
    position: absolute;
    left: 0;
    top: 0;
    // width: $slideWidth * $slideCount;
    transition: left 0.5s ease-out;

    & > ul {
      display: flex;
      & > li {
        // width: $slideWidth;

        & > h2 {
          // height: $slideHeight;
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
    // width: $slideWidth / 2;
    // left: $slideWidth / 4;

    top: 90%;
    align-items: center;
  }
}
</style>
