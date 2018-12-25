/** Pretrained architecture and weights */
var pretrained_population = [
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.0069907814792737055,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06417741254009579,
                "from": 1,
                "to": 8,
                "gater": 10
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.023441932170974372,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    },
    {
        "nodes": [
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "0"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "1"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "2"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "3"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "4"
            },
            {
                "bias": 0,
                "type": "input",
                "squash": "LOGISTIC",
                "index": "5"
            },
            {
                "bias": -0.8080412419337857,
                "type": "hidden",
                "squash": "SOFTSIGN",
                "index": "6"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "7"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "8"
            },
            {
                "bias": -0.05851781317753968,
                "type": "output",
                "squash": "LOGISTIC",
                "index": "9"
            },
            {
                "bias": -0.016889401841607032,
                "type": "output",
                "squash": "HLIM",
                "index": "10"
            }
        ],
        "connections": [
            {
                "weight": 0.08884108353808737,
                "from": 1,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.09897142179204682,
                "from": 0,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.07753378544698211,
                "from": 2,
                "to": 6,
                "gater": null
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.05293001692149218,
                "from": 0,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.09385307887781466,
                "from": 3,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.04349983214872005,
                "from": 1,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.6871814881931327,
                "from": 0,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.08423215263547343,
                "from": 4,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.05922352018771365,
                "from": 2,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.003497534019854198,
                "from": 1,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 8,
                "gater": null
            },
            {
                "weight": -0.06760487595420091,
                "from": 3,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.07267552121157525,
                "from": 2,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.01681600697056225,
                "from": 6,
                "to": 7,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 8,
                "gater": null
            },
            {
                "weight": 0.040383398887758576,
                "from": 4,
                "to": 9,
                "gater": null
            },
            {
                "weight": 0.06969619426249962,
                "from": 3,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.013852614316634648,
                "from": 5,
                "to": 9,
                "gater": null
            },
            {
                "weight": -0.09966036327516883,
                "from": 4,
                "to": 10,
                "gater": null
            },
            {
                "weight": 0.04174232808443801,
                "from": 8,
                "to": 7,
                "gater": null
            },
            {
                "weight": -0.06333927308720932,
                "from": 5,
                "to": 10,
                "gater": null
            }
        ],
        "input": 6,
        "output": 4
    }
];

// Convert the json to an array of networks
var newPop = [];
pretrained_population.forEach((json) => {
    newPop.push(neataptic.Network.fromJSON(json));
});
pretrained_population = newPop;