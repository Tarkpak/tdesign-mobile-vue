/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDropdownMenuProps } from './type';
import { PropType } from 'vue';

export default {
  /** 是否在点击遮罩层后关闭菜单 */
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  /** 动画时长 */
  duration: {
    type: [String, Number] as PropType<TdDropdownMenuProps['duration']>,
    default: 200,
  },
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    default: true,
  },
  /** 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500 */
  zIndex: {
    type: Number,
  },
};
