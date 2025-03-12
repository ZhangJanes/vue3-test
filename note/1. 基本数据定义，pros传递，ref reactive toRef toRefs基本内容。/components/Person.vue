<template>
    <!-- 结构 -->
    <div class="app">
        <!-- <h1>你好啊！</h1>
        {{ name }}
        {{ age }}
        {{ tel }}
        <button @click="changeName">更改</button>
        <button @click="changeFirst">更改123</button>
        <button @click="changeCar">更改品牌</button>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <div>
            品牌: {{ car.name }}
            价格：{{ car.price }}
        </div> -->
        aaaa{{ a }}
    </div>
</template>

<script lang="ts" setup name="person">
import { ref, reactive } from 'vue'
import { type PersonInter, type Persons } from '@/types' // 引入的为一个类型

let person: PersonInter = { id: 'lkasjdlfkjlsad', name: '张三', age: 18 } // 使用接口限制一个类型

let personList: Array<PersonInter> = [ // <PersonInter> 为泛型
    { id: 'lkasjdlfkjlsad1', name: '张三', age: 18 },
    { id: 'lkasjdlfkjlsad2', name: '李四', age: 19 },
    { id: 'lkasjdlfkjlsad3', name: '王五', age: 20 }
]

let personListNew = reactive<Persons>([ // reactive 可以传泛型
    { id: 'lkasjdlfkjlsad1', name: '张三', age: 18 },
    { id: 'lkasjdlfkjlsad2', name: '李四', age: 19 },
])

// 第一种写法
// 接收a
// defineProps(['a'])

// 接受props并且将props保存起来
// let propsList = defineProps(['a', 'b'])  /// 是个对象
// console.log(propsList)

// 第二种写法：限制props 类型 接收限制必要性，指定默认值
// defineProps<{ list?: Persons }>() // 问号的存在就是list可以选择性传，没有问号就必须传

// 指定默认值 list和extraList 为接收的两个参数，类型都是Persons类型的并且带有默认值
withDefaults(
    defineProps<{ list?: Persons, extraList?: Persons }>(),
    {
        list: () => [{ id: '1233', name: '康师傅', age: 18 }],
        extraList: () => []
    }
)

// 注意：define类型的函数 属于宏函数，可以不引用























// import { ref, reactive, defineExpose } from 'vue'
// // 需要哪个数据是响应式的就用ref包一下，基本类型响应式数据。
// // 使用ref。ref可以定义基本类型也可以定义对象类型响应式数据。
// // 使用ref定义的数据，需要在第一层使用‘.value’访问

// // 响应式的对象使用reactive, 深层次的响应式。原对象呗reactive包裹就是响应式对象，Proxy, 
// // reactive只能定义对象类型的响应式数据

// /*
//     开发建议:
//     1. ref创建的变量必须使用.value,可以是使用插件volar插件。
//     2. reactive重新分配一个对象，会失去响应式，可以使用object.assign,object.assing(a,b,c) 将b和c的所有属性加到a中。 ref可以直接更改，无需该操作。

//     推荐使用规则：
//     1. 如需要一个基本类型的响应式数据，必须使用ref
//     2. 若需要一个响应式对象，层级不深，ref reactive都可以
//     3. 若需要要给响应式对象，且层级较深，推荐使用reactive。（表单使用reactive）
// */
// // 
// let name = ref('张三')
// let age = ref(18)
// let tel = '123'
// let car = reactive({ name: '奔驰', price: '100万' })
// let car1 = ref({ name: '奔驰', price: '100万' })

// let games = reactive([
//     { id: '123', name: '1' },
//     { id: '1', name: '12' },
//     { id: '12', name: '123' }
// ])
// const changeCar = () => {
//     // car = { name: 'Audi', price: '90万' } // 这么写页面不更新
//     // car = reactive({ name: 'Audi', price: '90万' }) // 这么写页面不更新
//     Object.assign(car, { name: 'Audi', price: '90万' })
//     car1.value = { name: 'Audi', price: '90万' }
// }
// const changeName = () => {
//     name.value = 'zjn'
// }
// const changeFirst = () => {
//     games[0].name = "lol"
// }
// defineExpose({ age, name, tel })
</script>

<style></style>
