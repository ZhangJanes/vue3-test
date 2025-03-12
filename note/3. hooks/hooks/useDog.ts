import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default function () {
  let dogList = reactive([])

  async function getDog() {
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }
  onMounted(() => {
    getDog()
  })
  // 向外部提供东西
  return {
    dogList,
    getDog,
  }
}
