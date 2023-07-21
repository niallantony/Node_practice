const Square = (x,y) => {
    return {
        x,
        y,
        nne: null,
        ene: null,
        ese: null,
        sse: null,
        ssw: null,
        wsw: null,
        wnw: null,
        nnw: null,
    }

}

exports.knightsTravails = (coordinates,destination) => {
    const squares = [];
    const queue = [];
    const DIRECTIONS = {
        nne: function(x,y) { return [x+1,y+2] },
        ene: function(x,y) { return [x+2,y+1] },
        ese: function(x,y) { return [x+2,y-1] },
        sse: function(x,y) { return [x+1,y-2] },
        ssw: function(x,y) { return [x-1,y-2] },
        wsw: function(x,y) { return [x-2,y-1] },
        wnw: function(x,y) { return [x-2,y+1] },
        nnw: function(x,y) { return [x-1,y+2] },
    }

    const DIGITS = ['a','b','c','d','e','f','g','h']


    const changeFromNotation = (notation) => {
        const array = notation.split('');
        if (!DIGITS.includes(array[0])) throw new Error("Incorrect Notation inputted");
        array[0] = DIGITS.indexOf(array[0].toLowerCase());
        array[1] = Number(array[1]) - 1;
        return array
    }

    const changeToNotation = (coordinate) => {
        return [DIGITS[coordinate[0]].toUpperCase(),coordinate[1] + 1].join('');
    }

    const getMoves = (current) => {
        return {
            nnw: DIRECTIONS.nnw(current.x,current.y),
            ene: DIRECTIONS.ene(current.x,current.y),
            ese: DIRECTIONS.ese(current.x,current.y),
            sse: DIRECTIONS.sse(current.x,current.y),
            nne: DIRECTIONS.nne(current.x,current.y),
            ssw: DIRECTIONS.ssw(current.x,current.y),
            wsw: DIRECTIONS.wsw(current.x,current.y),
            wnw: DIRECTIONS.wnw(current.x,current.y),
        }
    }

    const buildTree = () => {
        queue.push(root);
        while (queue.length) {
            buildBranches(queue.shift());
        }
    }

    const checkCoords = (array) => {
        if (array[0] > 7 || array[0] < 0 || array[1] > 7 || array[1] < 0) throw new Error("Incorrect notation inputted");
    }

    const buildBranches = (current) => {

        // return if move already made, and push this square to the array of squares already visited
        if (squares.includes([current.x,current.y].join(','))) return;
        squares.push([current.x,current.y].join(','));

        // Get all possible moves
        const squareMoves = getMoves(current);
        //Run checks on each move
        for (let key of Object.keys(squareMoves)) {
            const x = squareMoves[key][0];
            const y = squareMoves[key][1];
            // return if out of bounds
            if (x < 0 || y < 0 || x > 7 || y > 7) continue;
            const nextMove = Square(x,y);
            // return if move already made
            if(squares.includes([nextMove.x,nextMove.y].join(','))) continue;
            // populate current nodes target for this move
            current[key] = nextMove;
            // enqueue this move's node
            queue.push(current[key]);
        }
    }

    const showMoves = (destination, node = root, movelist = []) => {
        //If traversal doesn't find the answer, return null
        let found = null;

        // Add the root to the movelist
        if (node === root) movelist = [changeToNotation([node.x,node.y])];

        //Check all directions for possible moves (Since the tree is built will only move to each square once)
        for (let key of Object.keys(DIRECTIONS)) {

            //Return if move is unavailable or has been made
            if (!node[key]) continue;

            // If this is the destination then print the passed down movelist and return the node
            if ([node[key].x,node[key].y].join(',') === destination.join(',')) {
                found = node[key];
                movelist.push(changeToNotation([node[key].x,node[key].y]));
                console.table(movelist);
                console.log(" ♘ Reached destination in ",movelist.length," moves. ♘ ")
            } else {

                // If not found then traverse this move, passing down the move into an array of moves.
                found = showMoves(destination,node[key],[...movelist,changeToNotation([node[key].x,node[key].y])]);
            }
            if (found) {
                // If destination found (return of the function is not null) then return out of recursion
                return found;
            }
        }
        // All moves down this branch have been done, and nothing has been found, then return null.
        return found
    }

    const coorArray = changeFromNotation(coordinates);
    const destArray = changeFromNotation(destination);
    checkCoords(coorArray);
    checkCoords(destArray);
    let root = Square(coorArray[0],coorArray[1]);
    buildTree(coorArray);
    showMoves(destArray);

}