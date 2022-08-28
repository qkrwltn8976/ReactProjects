### class로 만드는 게임

1. 화면에 네모, 원 그릴 수 있어야 함
2. 프레임마다 코드 실행 가능해야 함(애니메이션 위해)
3. collsion check 할 수 있어야 함

#### 네모 그리는 법

```html
<canvas></canvas>
<script src="main.js"></script>
```

- main.js
  - 등장 캐릭터와 장애물은 속성부터 object 자료에 정리해두면 편리
  - 장애물은 width, height가 각각 다를 수 있으므로 class로 생성
  - 애니메이션을 만들려먼 1초에 60번 x++ 해줘야 함

```javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image();
img2.src = "dinosaur.png";

var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(img2, this.width, this.height);
  },
};

var img1 = new Image();
img1.src = "cactus.png";

dino.x += 1;

dino.draw();

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.hegith = 50;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(img1, this.width, this.height);
  }
}

var cactus = new Cactus();
cactus.draw();

var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var animation;
function 프레임마다실행할함수() {
  requestAnimationFrame(프레임마다실행할함수);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 200 === 0) {
    var cactus = new Cactus();
    cactus여러개.push(cactus);
    cactus.draw();
  }
  cactus여러개.forEach((a, i, o) => {
    // x좌표가 0미만이면 제거
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;

    충돌하냐(dino, cactus);
    a.draw();
  });

  if (졈프중 == true) {
    dino.y--;
    점프timer++;
  }
  if (점프중 == false) {
    if (dino.y < 200) {
      dino.y++;
    }
  }

  if (점프timer > 100) {
    점프중 = false;
    점프timer = 0;
  }

  dino.draw();
}

프레임마다실행할함수();

// 충돌 확인
function 충돌하냐(dino, cactus) {
  var x축차이 = cactus.x - (dino.x + dino.width);
  var y축차이 = cactus.y - (dino.y + dino.height);
  if (x축차이 < 0 && y축차이 < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

var 점프중 = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    점프중 = true;
  }
});
```
