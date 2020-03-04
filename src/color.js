export default {
    bind(el, bindings, vnode) {
        console.log('bind')
        el.style.color = 'blue'
    },

    inserted(el, bindings, vnode) {
        console.log('inserted')
    },

    // oldVnode - старая виртуальная virtual node, которая была создана до апдейта
    update(el, bindings, vnode, oldVnode) {
        console.log('update')
    },

    componentUpdated(el, bindings, vnode, oldVnode) {
        console.log('componentUpdated')
    },

    unbind() {
        console.log('unbind')
    }

}