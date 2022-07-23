# Vanilla JS로 그림 앱 만들기

## 📌 Canvas API

- Context.`lineWidth = number`: 선 굵기를 설정한다.
- Context.`fill()`: 그린 영역에 색을 채운다.
- Context.`stroke()`: 그린 영역에 선을 그린다.
- Context.`fillStyle = 'color'`: 채울 때 사용하는 색상을 변경한다.
- Context.`strokeStyle = 'color'`: 선을 그릴 때 사용하는 색상을 변경한다.
- Context.`fillRect(x, y, w, h)`: x, y 좌표에 w, h 크기만큼 `fill`과 `rect`를 같이 호출한다.(색을 채우면서 사각형을 만든다.)
- Context.`strokeText(text, x, y)`: x, y 좌표에 해당 text를 선을 그리면서 그린다.
- Context.`fillText(text, x, y)`: x, y 좌표에 해당 text를 색을 칠하면서 그린다.
- Context.`moveTo(x, y)`: 모양을 그리지 않으면서 현재의 포인터를 x, y 값만큼 이동한다.
- Context.`lineTo(x, y)`: 선을 그리면서 현재의 포인터를 x, y 값만큼 이동한다.
- Context.`beginPath()`: 새롭게 그리기 시작하는 지점을 지정한다.(기존에 그려지던 지점과 구분하기 위해서)
- Context.`save()`: Context가 현재 가지고 있는 속성(상태, 색상, 스타일 등)들을 저장한다.
- Context.`restore()`: 기존에 `save()`로 저장된 속성으로 돌아간다.
- canvas.`toDataURL()`: 현재 canvas에 있는 그림 데이터를 URL로 변환해준다.

[https://dingunote.github.io/meme-maker/](https://dingunote.github.io/meme-maker/)

> Reference : [https://nomadcoders.co/javascript-for-beginners-2/lobby](https://nomadcoders.co/javascript-for-beginners-2/lobby)
