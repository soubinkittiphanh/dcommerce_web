exports.ids = [124];
exports.modules = {

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/timeline/GianttTimeline.vue?vue&type=template&id=2fc8508c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "gstc"
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/timeline/GianttTimeline.vue?vue&type=template&id=2fc8508c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/timeline/GianttTimeline.vue?vue&type=script&lang=js&
/* harmony default export */ var GianttTimelinevue_type_script_lang_js_ = ({
  mounted() {
    const GSTC = this.$GSTC; // Access GSTC directly from the Vue instance
    let config = {
      // Basic configuration:

      licenseKey: '====BEGIN LICENSE KEY====\nTwJFTCUe2zWuAYE7Hq3l5GM5HROG+m6H0iz8Iu9Abfqop1YdlRR6giZfP7o7JI4D6zGXbwBa5JJ2UciGJdGbPzXXW8tShpsK1Mkr1OR8QjLoOix8ydsWX5pAQ0QxvtMSqkD4jXdO2YSxcjglVRrKiAaFrWf+ex9lf6+ejL3i7MR4UM5DBI8HIFm/CG5ywoUOe2VnEsgZiVa8/81+75a4zKyLjOPaAUkuPN4Cm1evfXGiWFtmpTdiwh79NnMB/IYo2ffFqOZZ5JP7qgUUqoBGdbC5mYSBdvPWw54xsjw1ZjkBaoUDfSGPfeiy/lpNkO91k+vSYw1Vk8xeOLCQtWeSjw==||U2FsdGVkX1+9gg7jpmbT7k0Jp1SXOpPfmdYk7HLgIJwRLMk3HpsoLikegsIhSOvYLYhMhPSsYV/ddOUfTGdrgYxuNxyIFcqIQbiJ+1mkRjc=\npezmoghapOx+8Iz8d+0NEb50yCoqzlYutqLq7KCOAuAeKWtmfuC4R6u/CX3GHFQln+0PraBkdbCjNYSKdYrFRA6fjKc7rJ1oMSdxukznAOh2QLgesNp+/xymu44dwDz6PALzX6KbD7Isy7mte6fodqB91KMg65oI3gyxVTl3K8x7ytBaLDWQ89m300rY7H+b36GFc8hGR+FAezKpDeA9YA7z6SRztH9HqsNiBYUGe4PHJtkfpuowRTdNFxKtArSJ60c71deOKo+i6IJEYPG3ylAThXM8Jv977oVOLZLhE4Z0g4T/PP5MLq7JijEURVdAqTjyUK7Nhu8+TJH+JKWiFg==\n====END LICENSE KEY====',
      plugins: [],
      list: {
        rows: {
          'gstcid-row-1': {
            id: 'gstcid-row-1',
            label: 'Task 1'
          },
          'gstcid-row-2': {
            id: 'gstcid-row-2',
            label: 'Task 2'
          },
          'gstcid-row-3': {
            id: 'gstcid-row-3',
            label: 'Task 3'
          }
        },
        columns: {
          data: {
            id: {
              id: 'id',
              data: 'id',
              width: 80,
              header: {
                content: 'ID'
              }
            },
            label: {
              id: 'label',
              data: 'label',
              width: 200,
              header: {
                content: 'Task Name'
              }
            }
          }
        }
      },
      chart: {
        items: {
          'gstcid-item-1': {
            id: 'gstcid-item-1',
            rowId: 'gstcid-row-1',
            label: 'Subtask 1',
            time: {
              start: Date.now(),
              end: Date.now() + 1000 * 60 * 60 * 24
            }
          },
          'gstcid-item-2': {
            id: 'gstcid-item-2',
            rowId: 'gstcid-row-2',
            label: 'Subtask 2',
            time: {
              start: Date.now() + 1000 * 60 * 60 * 24,
              end: Date.now() + 1000 * 60 * 60 * 48
            }
          },
          'gstcid-item-3': {
            id: 'gstcid-item-3',
            rowId: 'gstcid-row-3',
            label: 'Subtask 3',
            time: {
              start: Date.now() + 1000 * 60 * 60 * 48,
              end: Date.now() + 1000 * 60 * 60 * 72
            }
          }
        }
      },
      time: {
        from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        // start of the month
        to: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59),
        // end of the month
        zoom: 12 // Adjust zoom level to fit the month into view, might need tweaking
      }
    };

    let element = this.$refs.gstc;
    let gstcInstance = GSTC({
      element,
      state: GSTC.api.stateFromConfig(config)
    });
  },
  computed: {
    getCurrentMonthStartEnd() {
      const now = new Date();
      const start = new Date(now.getFullYear(), now.getMonth(), 1); // First day of the current month
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59); // Last day of the current month
      return {
        start,
        end
      };
    }
  }
});
// CONCATENATED MODULE: ./components/timeline/GianttTimeline.vue?vue&type=script&lang=js&
 /* harmony default export */ var timeline_GianttTimelinevue_type_script_lang_js_ = (GianttTimelinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/timeline/GianttTimeline.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  timeline_GianttTimelinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "53e8f00a"
  
)

/* harmony default export */ var GianttTimeline = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=timeline-giantt-timeline.js.map