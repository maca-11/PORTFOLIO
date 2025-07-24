var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color: '#F34900', pos: .2 },
                    { color: '#F38943', pos: .8 },
                    { color: '#F39500', pos: 1 }
                ], [
                    { color: '#FF914D', pos: 0 },
                    { color: '#F3D67A', pos: .2 },
                    { color: '#FFEDD1', pos: .75 }
                ],
            ]
        }
    }
});