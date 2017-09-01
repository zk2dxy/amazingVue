import validate from './validate'
import store from '@/store'

export default {
  validate,
  /**
   * 对象复制数据，不会增加目标对象字段数量
   * @return {[type]} [description]
   */
  setDataFromOther (target, src) {
    for (let index in src) {
      if (target[index] !== undefined) {
        target[index] = src[index]
      }
    }
  },
  /**
   * [copyDataFromOther 让targetObj中包含src里面的属性]
   * @param  {[type]} target [目标对象]
   * @param  {[type]} src    [要复制的对象]
   * @return {[type]}        [description]
   */
  copyDataFromOther (target, src) {
    for (let index in src) {
      target[index] = src[index]
    }
  },
  /**
   * [deleteDataFromOther 从targetObj中置src里面的属性为空]
   * @param  {[type]} target [description]
   * @param  {[type]} src    [description]
   * @return {[type]}        [description]
   */
  deleteDataFromOther (target, src) {
    for (let index in src) {
      if (target[index] !== undefined) {
        target[index] = undefined
      }
    }
  },
  // 根据字典code和value获得字典名称
  getDictName (code, value) {
    const dicts = store.state.dictStore.dicts[code]
    const dict = dicts.find(item => item.value === value)
    if (dict) {
      return dict.label
    } else {
      return ''
    }
  }
}
