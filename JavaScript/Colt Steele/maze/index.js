
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;
const cellsHorizontal = 5;
const cellsVertical = 10;
const width = window.innerWidth;
const height = window.innerHeight;

const unitLenghtX = width / cellsHorizontal;
const unitLenghtY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);


const walls = [
    Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];
World.add(world, walls);


// Mise en place du laby

const shuffle = arr => {
    let counter = arr.length;

    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);

        counter--;

        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }

    return arr;
};

const grid = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal).fill(false));

const verticals = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal - 1).fill(false));

const horizontals = Array(cellsVertical - 1).fill(null).map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const stepThroughCells = (row, column) => {
    if (grid[row][column]) {
        return;
    }

    grid[row][column] = true;

    const neighbors = shuffle([
        [row - 1, column, 'up'],
        [row, column + 1, 'right'],
        [row + 1, column, 'down'],
        [row, column - 1, 'left']
    ]);

    for (let neighbor of neighbors) {
        const [nextRow, nextColumn, direction] = neighbor;

        if (nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal) {
            continue;
        }
        if (grid[nextRow][nextColumn]) {
            continue;
        }

        if (direction === 'left') {
            verticals[row][column - 1] = true;
        } else if (direction === 'right') {
            verticals[row][column] = true;
        } else if (direction === 'up') {
            horizontals[row - 1][column] = true;
        } else if (direction === 'down') {
            horizontals[row][column] = true;
        }
        stepThroughCells(nextRow, nextColumn);

    }


};

stepThroughCells(startRow, startColumn);

horizontals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if (open) {
            return;
        }

        const wall = Bodies.rectangle(
            columnIndex * unitLenghtX + unitLenghtX / 2,
            rowIndex * unitLenghtY + unitLenghtY,
            unitLenghtX,
            5,
            {
                label: 'wall',
                isStatic: true
            }
        );
        World.add(world, wall);
    });

    verticals.forEach((row, rowIndex) => {
        row.forEach((open, columnIndex) => {
            if (open) {
                return;
            }

            const wall = Bodies.rectangle(
                columnIndex * unitLenghtX + unitLenghtX,
                rowIndex * unitLenghtY + unitLenghtY / 2,
                5,
                unitLenghtY,
                {
                    label: 'wall',
                    isStatic: true
                }
            );
            World.add(world, wall);
        });
    });


});

const goal = Bodies.rectangle(
    width - unitLenghtX / 2,
    height - unitLenghtY / 2,
    unitLenghtX * 0.7,
    unitLenghtY * 0.7,
    {
        label: 'goal',
        isStatic: true
    }

);
World.add(world, goal);



const ballRadius = Math.min(unitLenghtX, unitLenghtY) / 4;
const ball = Bodies.circle(
    unitLenghtX / 2,
    unitLenghtY / 2,
    ballRadius,
    { label: 'ball' }
);

World.add(world, ball);

document.addEventListener('keydown', event => {
    const { x, y } = ball.velocity;

    if (event.keyCode === 37) {
        Body.setVelocity(ball, { x: x - 5, y });
    }
    if (event.keyCode === 38) {
        Body.setVelocity(ball, { x, y: y - 5 });
    }
    if (event.keyCode === 39) {
        Body.setVelocity(ball, { x: x + 5, y });
    }
    if (event.keyCode === 40) {
        Body.setVelocity(ball, { x, y: y + 5 });
    }
});


Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach(collision => {
        const labels = ['ball', 'goal'];

        if (
            labels.includes(collision.bodyA.label) &&
            labels.includes(collision.bodyB.label)
        ) {
            document.querySelector('.winner').classList.remove('hidden');
            world.gravity.y = 1;
            world.bodies.forEach(body => {
                if (body.label === 'wall') {
                    Body.setStatic(body, false);
                }
            });
        }
    });
});