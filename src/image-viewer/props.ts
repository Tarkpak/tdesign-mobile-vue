/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdImageViewerProps } from './type';
import { PropType } from 'vue';

export default {
  /** 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以完全自定义关闭按钮 */
  closeBtn: {
    type: [Boolean, Function] as PropType<TdImageViewerProps['closeBtn']>,
    default: true,
  },
  /** 是否显示删除操作 */
  deleteBtn: Boolean,
  /** 图片数组 */
  images: {
    type: Array as PropType<TdImageViewerProps['images']>,
    default: (): TdImageViewerProps['images'] => [],
  },
  /** 初始化页码 */
  initialIndex: {
    type: Number,
    default: 0,
  },
  /** 最大放大比例 */
  maxZoom: {
    type: Number,
    default: 3,
  },
  /** 是否显示页码 */
  showIndex: Boolean,
  /** 隐藏/显示预览 */
  visible: {
    type: Boolean,
    default: undefined,
  },
  modelValue: {
    type: Boolean,
    default: undefined,
  },
  /** 隐藏/显示预览，非受控属性 */
  defaultVisible: Boolean,
  /** 翻页时回调 */
  onChange: Function as PropType<TdImageViewerProps['onChange']>,
  /** 关闭时触发，事件参数包含触发关闭的来源：关闭按钮、遮罩层、ESC 键 */
  onClose: Function as PropType<TdImageViewerProps['onClose']>,
  /** 点击删除操作按钮时触发 */
  onDelete: Function as PropType<TdImageViewerProps['onDelete']>,
};
