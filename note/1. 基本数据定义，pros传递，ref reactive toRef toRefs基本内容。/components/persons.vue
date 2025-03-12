<template>
    <!-- 结构 -->
    <div class="app">
        姓： <input type="text" v-model="firstName"> <br>
        名： <input type="text" v-model="lastName"> <br>
        姓名：{{ fullName }} <br>
        <button @click="changeFullName">更改fullName</button>


    </div>
</template>

<script lang="ts" setup name="persons">
import { ref, computed, watch, reactive } from 'vue'

let firstName = ref('zhang')
let lastName = ref('san')

// let fullName = computed(() => { // 计算属性拥有缓存
//     return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
// })

let fullName = computed({
    get() {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    set(val) {
        const [str1, str2] = val.split('-')
        firstName.value = str1
        lastName.value = str2
    }
})

const changeFullName = () => {
    console.log(fullName.value)
    fullName.value = 'li-si'
}

// watch
// vue3的watch 只能监视四种数据
// 1. ref定义的数据
// 2. reactive定义的数据
// 3. 函数返回一个值(getter函数)
// 4. 一个包含上述内容的数组
// 第一个参数是监视的数据,第二参数是坚实的回调,watch的第三个参数是配置对象{ deep: true, immediate: true }


// 情况一:  监视ref定义的对象类型的数据,监视的是对象的地址值,若想监视对象内部属性的变化,需要手动开启深度监视. 
let sum = ref(0)
const changeSum = () => {
    sum.value += 1
}
// 监视
const stopWatch = watch(sum, (newVal, oldVal) => {
    console.log(sum);
    if (sum.value > 10) {
        stopWatch()
    }
})
// 情况二: 监视ref定义的对象类型的数据,监视的是对象的地址值,若想监视对象内部属性的变化,需要手动开启深度监视. 传入第三个参数
let person = ref({ name: 'zhangsan', age: 18 })

const changeName = () => {
    person.value.name += '~'
}
const changeAge = () => {
    person.value.age += 1
}
const changePerson = () => {
    person.value = { name: '李四', age: 90 }
}

watch(
    person,
    (newval, oldval) => {
        console.log('person变化了', newval, oldval)
    },
    { deep: true, immediate: true }
)

// 情况三:监视reactive定义的对象类型的数据
/**
 1. 默认是开启深度监视的,隐式创建深层监听,且无法关闭
*/

let person1 = reactive({ name: 'zhangsan', age: 18 })

const changeName1 = () => {
    person1.name += '~'
}
const changeAge1 = () => {
    person1.age += 1
}
const changePerson1 = () => {
    Object.assign(person1, { name: '李四', age: 90 })
}

watch(
    person1,
    (newval, oldval) => {
        console.log('person1变化了')
    }
)

// 情况四:监视reactive或ref定义的对象类型数据中某个属性,传入一个函数返回一个值。 常用。
/**
 1. 若该属性值不是对象类型，需要写成函数形式。
 2. 若改属性值是依然是对象类型，可直接编，也可写成函数。 建议写成函数。
 结论: 监视的要是对象里的属性，那么最好写函数式，注意点：若是对象则监视的是地址值，如果需要关注对象内部，那么就需要手动开始深度监视。
*/

let person2 = reactive({ name: 'zhangsan', age: 18, car: { name: 'audi', price: '100万' } })

const changeName2 = () => {
    person2.name += '~'
}
const changeAge2 = () => {
    person2.age += 1
}
const changePerson2 = () => {
    Object.assign(person1, { name: '李四', age: 90 })
}

// 监听对象里面的某一个值
watch(
    () => person2.name,
    (newval, oldval) => {
        console.log('person1变化了')
    }
)

// 如果car整个更改car，car不会被监听到
watch(person2.car, (n, o) => {

})
// 如果写成函数式，可以监听到整个car的变化，但是内部属性无法监听，需要配置深度监听
watch(() => person2.car, (n, o) => {

}, { deep: true })

// 情况五：监视上述多个数据 可以列为一个数组
watch([() => person2.name, () => person2.car.name], (newVal, oldVal) => { // new 和old 为前面监听的数组
    console.log(newVal, oldVal)
})

































// toRefs的作用就是将定义的响应式对象变成一个个由ref定义的对象，简单点说，就是toRefs将reactive定义的对象里面的每一个key value都转为ref定义的响应式数据

// toRef 是将定义响应式里面的东西拿出来变成一个响应式的数据，使用方式为
/*
 * let { name, age } = toRefs(person)
 * let nl = toRef(person, 'age')
 * console.log(nl.value)
*/
// import { ref, reactive, toRefs, toRef } from 'vue'

// let person = reactive({ name: 'zhangsna', age: 18 })
// let person1 = ref({ name: 'zhangsna', age: 18 })

// let { name, age } = toRefs(person1.value)
// let nl = toRef(person, 'age')
// console.log(nl.value)

// const changeName = () => {
//     name.value += '-'
//     age.value += 1
// }
// const changeFirst = () => {

// }
</script>
