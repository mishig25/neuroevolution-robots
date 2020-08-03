# Neuroevolution-Bots
Neuroevolution-Bots is a personal project that demonstrates [neuroevolution](https://en.wikipedia.org/wiki/Neuroevolution) in a browser environment using [TensorFlow.js](https://js.tensorflow.org/), [Neataptic](https://github.com/wagenaartje/neataptic) (for neural nets) and HTML5 Canvas (for graphics). I tried to create a scaled down 2D version of the popular [Gym's Humanoid-v2 environment](https://gym.openai.com/envs/Humanoid-v2/) using [Planck.js](http://piqnt.com/planck.js/), a JavaScript rewrite of Box2D.

![screen capture from demo](https://github.com/mishig25/neuroevolution-robots/raw/master/ss.gif)

The bots in the simulation have simple brains (neural nets) that control their movements. Input to the brains: bot's head position in the world space and angles of bot's leg and knee joints; output of the brains: rotation forces to bot's leg and knee joints. After every iteration, a fitness function chooses the most fit bots to the next iteration (fitness score of bot: how much the bot traveled to the right + whether bot fell down or not).

Two variations of neuroevolution are available:
* [NEAT](http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf) (network architecture and weights are updated) (using [Neataptic.js](https://github.com/wagenaartje/neataptic))
* Vanilla Neuroevolution (only network weights are updated) (using [Tensorflow.js](https://www.tensorflow.org/js))

## TRY THE DEMO: [here](https://mishig25.github.io/neuroevolution-robots/)

References and inspirations:
* [Uber's blogpost on Deep Neuroevolution](https://eng.uber.com/deep-neuroevolution/)
* [Evolving AI Lab posts](http://www.evolvingai.org/robotics)
* [Roboschool by OpenAI](https://github.com/openai/roboschool)
* [Evolution Simulator by Aditya Thebe](https://github.com/adityathebe/evolutionSimulator)
* [Tweet by hardmaru](https://twitter.com/hardmaru/status/1007150247829594112?lang=en)

License:
MIT
