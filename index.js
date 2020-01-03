/* global AFRAME */

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * A component which adds a state to an entity based on whether or not in VR mode.
 */
AFRAME.registerComponent('vr-mode-watcher', 
{
    schema: 
    {
        vrStateName: {type: 'string', default: 'vr'},
        nonVrStateName: {type: 'string', default: 'non-vr'}
    },
    multiple: false,
    init: function () 
    {
        // Create handlers which link the scene vr-mode state to an entity state
        this.sceneStateAdded = event =>
        {
            if (event === undefined || event.detail === "vr-mode")
            {
                this.el.addState(this.data.vrStateName);
                this.el.removeState(this.data.nonVrStateName);
            }
        };
        this.sceneStateRemoved = event =>
        {
            if (event === undefined || event.detail === "vr-mode")
            {
                this.el.addState(this.data.nonVrStateName);
                this.el.removeState(this.data.vrStateName);
            }
        };
    },
    update: function(oldData) 
    {
        // Init state
        if (this.el.sceneEl.is('vr-mode')) this.sceneStateAdded();
        else this.sceneStateRemoved();
    },
    pause: function () 
    {  
        // Remove event listeners from the scen
        this.el.sceneEl.removeEventListener("stateadded", this.sceneStateAdded);
        this.el.sceneEl.removeEventListener("stateremoved", this.sceneStateRemoved);
    },
    play: function () 
    {  
        // Add event listeners to the scene
        this.el.sceneEl.addEventListener("stateadded", this.sceneStateAdded);
        this.el.sceneEl.addEventListener("stateremoved", this.sceneStateRemoved);
    }
});