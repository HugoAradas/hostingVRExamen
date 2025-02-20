window.addEventListener('load', initScene)

const dummies = [
    {x: 0, y: 0, z: -30},
    {x: 0, y: 0, z: 50},
    {x: 30, y: 0, z: 0},
    {x: -30, y: 0, z: 0},
    {x: 20, y: 0, z: 20},
    {x: 20, y: 0, z: -20},
    {x: -20, y: 0, z: -20}
]

let dummy, score = 0, oldScore = score

function initScene(){
    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit => {
        dummies.forEach(pos => {
            dummy = document.createElement('a-entity')
            dummy.setAttribute('gltf-model', '#dummy')
            dummy.setAttribute('scale', '0.5 0.5 0.5')
            dummy.setAttribute('look-at', '#camera')
            dummy.setAttribute('class', 'dummy')
            dummy.object3D.position.set(pos.x, pos.y, pos.z)

            dummy.setAttribute('shootable', '')

            orbit.appendChild(dummy)
        })
    })
}

AFRAME.registerComponent('shootable', {
    init: function () {
        this.el.addEventListener('click', () => {

            this.el.parentNode.removeChild(this.el)
            document.querySelector('[text]').setAttribute('value', `${++score} ENEMIGOS ABATIDOS`)

            var revS = document.querySelector('#revolver')

            if (score > oldScore) {
                oldScore = score
                revS.components.sound.playSound()
            }

            if (score == 14) {
                // pantalla de victoria
            }

        })
    }
})