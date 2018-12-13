# Neuroevolution-Bots
Neuroevolution-Bots is a personal project that demonstrates [neuroevolution](https://en.wikipedia.org/wiki/Neuroevolution) in a browser environment using [TensorFlow.js](https://js.tensorflow.org/) (for neural nets) and HTML5 Canvas (for graphics). I tried to create a scaled down 2D version of the popular [Gym's Humanoid-v2 environment](https://gym.openai.com/envs/Humanoid-v2/) using [Planck.js](http://piqnt.com/planck.js/), a JavaScript rewrite of Box2D.

The bots in the simulation have simple brains that consist of a 3-layer perceptron. Input to the perceptron: bot's head position in the world space and angles of bot's every joint; output of the perceptron: angular impulse to bot's joints. After every iteration, a fitness function chooses the most fit bots to the next iteration (fitness score of bot: how much the bot traveled to the right + how many times and how much bot's head was in upright position).

## TRY THE DEMO: [here](https://mishig25.github.io/neuroevolution-robots/)

*live training is happening in your browser. Try dragging one of the bots

References and inspirations:
* [Uber's blogpost on Deep Neuroevolution](https://eng.uber.com/deep-neuroevolution/)
* [Roboschool by OpenAI](https://github.com/openai/roboschool)
* [Evolution Simulator by Aditya Thebe](https://github.com/adityathebe/evolutionSimulator)
* [Tweet by hardmaru](https://twitter.com/hardmaru/status/1007150247829594112?lang=en)