"use strict";

function Node() {
  this.data = null;
  this.parent = null;
  this.left = null;
  this.right = null;

  return this;
}

function makeNode(data, left, right) {
  var node = new Node();
  node.data = data;
  node.left = left;
  node.right = right;

  if (node.left) {
    // Set this node as parent of left child
    node.left.parent = node;
  }

  if (node.right) {
    // Set this node as parent of right child
    node.right.parent = node;
  }

  return node;
}

function constructTree() {
  return makeNode(1,
                  makeNode(2,
                          makeNode(4,
                                  makeNode(8, null, null),
                                  makeNode(9, null, null)),
                          makeNode(5,
                                  makeNode(10, null, null),
                                  makeNode(11, null, null))),
                  makeNode(3,
                          makeNode(6, null, null),
                          makeNode(7,
                                  makeNode(12, null, null),
                                  makeNode(13, null, null))));
}
//             1
//        2        3
//      4   5    6    7
//     8 9 10 11     12 13


function printLevelOrder(rootNode) {
	console.log('printLevelOrder');
	
	if(!rootNode) return;
  
	rootNode.level = 1;
 
	let queue = [rootNode];
	let output = [];
	let current_level = rootNode.level;
 
	while(queue.length > 0) {
		
		let current_node = queue.shift(); 

		if(current_node.level > current_level) {
			current_level++;
			output.push("\n");
		}  

		output.push(current_node.data + " ");

		if(current_node.left) {
			current_node.left.level = current_level + 1; 
			queue.push(current_node.left); 
		}  

		if(current_node.right) {
			current_node.right.level = current_level + 1; 
			queue.push(current_node.right); 
		}  
		  
	}
 
	console.log(output.join(""));
	
	/*
	let currentLevelNodes = [];
	let nextLevelNodes = [];
	let levels = '';

	currentLevelNodes.push(rootNode);

	while(currentLevelNodes.length) {
		let temp = currentLevelNodes.shift();
		levels += temp.data;
		
		if(temp.left) {
		  nextLevelNodes.push(temp.left);
		}
					   
		if(temp.right) {
		  nextLevelNodes.push(temp.right);
		}
		
		//tree data
		//console.log(temp.data);
		
		if (currentLevelNodes.length == 0) {
		  currentLevelNodes = nextLevelNodes;
		  nextLevelNodes = [];
		  console.log(levels);
		  levels = '';
		}
	}
	*/
}

var rootNode = constructTree();
printLevelOrder(rootNode);