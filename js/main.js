
// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

window.onload = function (event) {
    
    // variables 
    var camera, scene, renderer;
    var controls;
    var element, container;
    
    // Initialize the scene, cameras, objects
    init();
    
    // Start animating (updates and render)
    render();

    function init () {
        
        // Create render, append canvas to the DOM
        renderer = new THREE.WebGLRenderer({ antialias: true,  alpha: true }); //alpha gerir bakgrunn transparent
        element = renderer.domElement;
        container = document.getElementById('container'); //tengja við index skjalið

       
        container.appendChild(element);
        
        // Skjárinn
        scene = new THREE.Scene();
        //scene.background = new THREE.Color(0xcccccc); //bakgrunnur

        // Búa til myndavél og staðsetja hana á fletinum 
        camera = new THREE.PerspectiveCamera(130, window.innerWidth / window.innerHeight, 0.01, 1000);
        camera.position.set(0, 50, 200); // sjónarhorn á kassa
        camera.lookAt(new THREE.Vector3()) //því það eru 3 ásar
        scene.add(camera);
        
        // Stjórna með músarhreyfingu
        controls = new THREE.OrbitControls(camera, element);
         controls.addEventListener( 'change', render );

            function render(e) {

               console.log(e.target);
                  
            }

        //setja inn myndir á fletina
        const textureLoader = new THREE.TextureLoader(); //er ekki best að nota const hér?
        textureLoader.load("images/myndCube.png", textureLoad); //mynd á aðalsíðu

        const textureLoaderAbout = new THREE.TextureLoader();
        textureLoader.load("images/myndCubeAbout.jpg", textureLoadAbout); //mynd á about síðu

        const textureLoaderPoem = new THREE.TextureLoader();
        textureLoader.load("images/myndCubeWithPoem.png", textureLoadPoem); //mynd á ljóða síðu


        function textureLoad(texture) { //flötur með mynd á aðalsíðu

            // Búa til Plane/hlið
            var geometry = new THREE.PlaneGeometry(200, 100); //stærðin
            //áferð á teningi
            var material = new THREE.MeshBasicMaterial( {
                side: THREE.DoubleSide, //mynd sést báðu megin á fleti
                map: texture
             } );

            plane = new THREE.Mesh(geometry, material);
            //snúa fletinum
            plane.rotateY(Math.radians(-45)); 
            plane.position.x= -75;
            plane.position.z= 70;
            scene.add(plane);
          
            
        
        }


        // $("#seeMore").on("update",function(e){
        //     console.log(e)});


        function textureLoadAbout(texture) { //flötur með mynd á about síðu

            var geometry = new THREE.PlaneGeometry(200, 100); //stærðin
            //áferð á teningi
            var material = new THREE.MeshBasicMaterial( {
                side: THREE.DoubleSide,
                map: texture
             } );

            plane = new THREE.Mesh(geometry, material);
            plane.rotateY(Math.radians(45));
            plane.position.x= 75;
            plane.position.z= 70;
            scene.add(plane);
        }

        function textureLoadPoem(texture) { //flötur með mynd á poem síðu
            var geometry = new THREE.PlaneGeometry(200, 200); //stærðin
            //áferð á teningi
            var material = new THREE.MeshBasicMaterial( {
                side: THREE.DoubleSide,
                map: texture
             } );

            plane = new THREE.Mesh(geometry, material);
            plane.rotateX(Math.radians(-90));
            plane.rotateZ(Math.radians(-45));
            plane.position.x= 0;
            plane.position.y= 60;
            plane.position.z= 0;
            scene.add(plane);
        }   


    //camera rotation (if e-h þá show - else: hide)
    function showOrHideButton() {
        var showOrHide = document.getElementById('seeMore');
            if ( plane.position.x == "-75" ) {
                showOrHide.style.display = 'block'; //show
            }
            else {
                showOrHide.style.display = 'none'; //hide
            }
    }
    
        // Adjust everything in case there is a window resize
        window.addEventListener('resize', handleResize);
        // Set up these adjustments for the first time right away
        setTimeout(handleResize, 1);  
    }

    // Make things move a bit in this iteration
    function render() {
        requestAnimationFrame(render);
        camera.updateProjectionMatrix();
       
        renderer.render(scene, camera);
    }

    // Adjust sizes on window resize
    function handleResize() {
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    // Go fullscreen (different triggers for different browser)
    function switchToFullscreen() {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        }
        else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        }
        else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen();
        }
        else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        }
    }  
}






  










//Create the controls object
//var controls = new THREE.OrbitControls( this.camera, this.renderer.domElement);
//get the camera position whenever you want
//var cameraPosition = controls.getPos();

//var button = new PushButton(

  //new InteractablePlane(buttonMesh, Leap.loopController)

//).on('press', function(mesh){

  //mesh.material.color.setHex(0xccccff);

//}).on('release', function(mesh){

  //mesh.material.color.setHex(0xeeeeee);

//});






           //document.addEventListener( 'mousedown', onDocumentMouseDown, false );

               // renderer = new THREE.WebGLRenderer();
               // renderer.setClearColor( 0xf0f0f0 );
                //renderer.setPixelRatio( window.devicePixelRatio );
                //renderer.setSize( window.innerWidth, window.innerHeight );
                //renderer.sortObjects = false;
                //container.appendChild(renderer.domElement);
                //stats = new Stats();
                //container.appendChild( stats.dom );
                //document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                //
                //window.addEventListener( 'resize', onWindowResize, false );




    


        


