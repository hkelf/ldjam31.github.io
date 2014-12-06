/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 imwhiskas@gmail.com, hugo.kelfani@gmail.com
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function ( ) {
    game.Entity.define('entity_player')
        .modules([
            {
                type: 'module_physics',
                data: {
                    maxSpeed: 2,
                    maxRotationSpeed: Math.PI/20,
                    inertia: 0.1,
                    rotationInertia: Math.PI/22
                }
            },
        ])
        .onCreate(function(args) {
            this.id = 'player';
            this.x = args.x;
            this.y = args.y;
        })
        .whenKeyIsPressed(
            38, function () { //up
                this.module('module_physics').acceleration += 0.2;
            }
        )
        .whenKeyIsPressed(
            40, function () { //down
                this.module('module_physics').acceleration -= 0.2;
            }
        )
        .whenKeyIsPressed(
            37, function () { //left
                this.module('module_physics').rotationAcceleration -= 0.05;
            }
        )
        .whenKeyIsPressed(
            39, function () { //right
                this.module('module_physics').rotationAcceleration += 0.05;
            }
        )
})()