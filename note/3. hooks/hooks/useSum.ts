import { ref, onMounted, computed } from 'vue'
export default function () {
  let sum = ref(0)
  function changeSum() {
    sum.value += 1
  }
  onMounted(() => {
    sum.value += 100
  })

  let bigSum = computed(() => {
    return sum.value * 10
  })

  return {
    sum,
    changeSum,
    bigSum,
  }
}
