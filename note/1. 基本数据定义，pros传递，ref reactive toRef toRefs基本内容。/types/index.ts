// 定义一个接口用于限制person对象的具体属性
export interface PersonInter {
  name: string
  id: string
  age: number
}

// 一个自定义类型

export type Persons = Array<PersonInter> // 可以
// export type Persons = PersonInter[] // 都可以
