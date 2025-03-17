import mitt from 'mitt'
// 调用mitt()得到emitter emitter能：绑定事件、触发事件
const emitter = mitt()

// 绑定事件
emitter.on('test1', () => {
  console.log('test1被调用')
})

emitter.on('test2', () => {
  console.log('test2被调用')
})

// 触发事件
emitter.emit('test1','传参')
emitter.emit('test1','传参')

// 解绑时间
// emitter.off('test1')

// 全部解绑
// emitter.all.clear()

// 暴露emitter
export default emitter
