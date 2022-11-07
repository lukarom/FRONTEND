console.log('Hello JS Multithreading');


// function main() {
//     function first() {
//         console.log("Hi there");
//         function second() {
//             console.log("Hello there");
//         }
//         second();
//         console.log("The end");
//     }
//     first();
// }

const repeat = (str, times) => {
    let result = '';
    for(let i = 0; i < times; i++) {
        result += str;
    }
    return result;
}

const scream = (str) => {
    return str.toUpperCase() + "!!!";
}

const runFlow = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 10);
    return rant;
};

// runFlowNonArrow == runFlow
// const runFlowNonArrow = function(phrase) {
//     let text = scream(phrase);
//     let rant = repeat(text, 10);
//     return rant;
// };

const runRant = (phrase, el) => {
    const h1 = document.createElement('h1');
    h1.innerText = runFlow(phrase);
    el.appendChild(h1);
}

console.log('Hello World!');

runRant('Nemegstu anyziaus', document.body);

// PART 2

const divBox = document.querySelector('div.box');

const moveX = (ele, moveAmount, delay, onSuccess, onFailure) => {
    setTimeout(() => {
        const bodyBoundary = document.body.clientWidth;
        const elRight = ele.getBoundingClientRect().right;
        const elleft = ele.getBoundingClientRect().left;
        if(elRight + moveAmount > bodyBoundary) {
            onFailure()
        } else {
            ele.style.transform = `translateX(${elleft + moveAmount}px)`;
            onSuccess();
        }
    }, delay);
}


moveX(
    divBox,
    100,
    1000,
    () => {
        moveX(
            divBox,
            100,
            1000,
            () => {
                moveX(
                    divBox,
                    100,
                    1000,
                    () => {
                        moveX(
                            divBox,
                            100,
                            1000,
                            () => {
                                moveX(
                                    divBox,
                                    100,
                                    1000,
                                    () => {
                                        moveX(
                                            divBox,
                                            100,
                                            1000,
                                            () => {
                                                moveX(
                                                    divBox,
                                                    100,
                                                    1000,
                                                    () => {
                                                        moveX(
                                                            divBox,
                                                            100,
                                                            1000,
                                                            () => {
                                                                moveX(
                                                                    divBox,
                                                                    100,
                                                                    1000,
                                                                    () => {},
                                                                    () => {}
                                                                )
                                                            },
                                                            () => {
                                                                alert("Cannot move further!")
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        alert("Cannot move further!")
                                                    }
                                                )
                                            },
                                            () => {
                                                alert("Cannot move further!")
                                            }
                                        )
                                    },
                                    () => {
                                        alert("Cannot move further!")
                                    }
                                )
                            },
                            () => {
                                alert("Cannot move further!")
                            }
                        )
                    },
                    () => {
                        alert("Cannot move further!")
                    }
                )
            },
            () => {
                alert("Cannot move further!")
            }
        )
    },
    () => {
        alert("Cannot move further!")
    }
)

// If we do it like this all functions will happen at the same time
// moveX(
//     divBox,
//     100,
//     1000,
//     () => {},
//     () => {}
// )

// moveX(
//     divBox,
//     100,
//     1000,
//     () => {},
//     () => {}
// )