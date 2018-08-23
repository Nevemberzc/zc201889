var states = [
    { ZIndex: 1, width: 120, height: 150, top: 69, left: 134, opac: 0.2 },
    { ZIndex: 2, width: 130, height: 170, top: 59, left: 0, opac: 0.5 },
    { ZIndex: 3, width: 170, height: 218, top: 24, left: 110, opac: 0.7 },
    { ZIndex: 4, width: 224, height: 288, top: 0, left: 263, opac: 1 },
    { ZIndex: 3, width: 170, height: 218, top: 24, left: 470, opac: 0.7 },
    { ZIndex: 2, width: 130, height: 170, top: 59, left: 620, opac: 0.5 },
    { ZIndex: 1, width: 120, height: 150, top: 69, left: 500, opac: 0.2 },
];
//console.log(states)
// var states_index = states[6]
// console.log(states_index)
// states.splice(6,1)
// states.unshift(states_index)
// console.log(states)

//将状态和位置赋给li
var lis = $('#box li')
var states_index = states[6]

function move() {
    lis.each(function (index, item) {
        var state = states[index]
        // $(item).css({
        //     'z-index': state.ZIndex,
        //     'width': state.width,
        //     'height': state.height,
        //     'top': state.top,
        //     'left': state.left,
        //     'opacity': state.opac,
        // })
        //console.log(state.ZIndex)
        $(item).css('z-index', state.ZIndex).finish().animate(state, 1000).find('img').css('opacity', state.opac)
    })
}
move();


$('#box .prev').click(function () {
    states.unshift(states.pop())
    move()
})

function next() {
    states.push(states.shift())
    move()
}
$('#box .next').click(function () {
    next();
})

var time = null;
function autoPlay() {
    time = setInterval(function () {
        next();
    }, 3000)
}
autoPlay();

//停止轮播
$('#box section').add('#box li').hover(function () {
    clearInterval(time)
}, function () {
    autoPlay();
})