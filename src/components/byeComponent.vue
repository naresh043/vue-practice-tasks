<template>
    <h1>
        Hello im the Bye Component{{ count }}
    </h1>
</template>
<script>
export default{
    data(){
        return{
            count: 10000
        }
    },
    name: 'ByeComponent',
}
</script>