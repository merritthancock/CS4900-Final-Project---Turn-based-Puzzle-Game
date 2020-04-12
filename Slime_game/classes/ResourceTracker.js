//The following is based on code for resource tracking and management from:
//https://threejsfundamentals.org/threejs/lessons/threejs-cleanup.html

class ResourceTracker {
    constructor() {
        this.resources = [];
    }

    //Add resource to list to keep track of them
    //Recursively adds resources from loaded models
    track(resource) {
        if (!resource) {
            return resource;
        }

        // handle children and when material is an array of materials.
        if (Array.isArray(resource)) {
            resource.forEach(resource => this.track(resource));
            return resource;
        }

        if (resource.dispose || resource instanceof THREE.Object3D) {
            this.resources.push(resource);
        }

        if (resource instanceof THREE.Object3D) {
            this.track(resource.geometry);
            this.track(resource.material);
            this.track(resource.children);
        }
        else if (resource instanceof THREE.Material) {
            // We have to check if there are any textures on the material
            for (const value of Object.values(resource)) {
                if (value instanceof THREE.Texture) {
                    this.track(value);
                }
            }
            // We also have to check if any uniforms reference textures or arrays of textures
            if (resource.uniforms) {
                for (const value of Object.values(resource.uniforms)) {
                    if (value) {
                        const uniformValue = value.value;
                        if (uniformValue instanceof THREE.Texture ||
                        Array.isArray(uniformValue)) {
                            this.track(uniformValue);
                        }
                    }
                }
            }
        }

        return resource;
    }

    //Remove resource from list
    untrack(resource) {
        this.resources.pop(resource);
    }

    //Free all tracked resources
    dispose() {
        for (const resource of this.resources) {
            if (resource instanceof THREE.Object3D) {
                if (resource.parent) {
                    resource.parent.remove(resource);
                }
            }
            if (resource.dispose) {
                resource.dispose();
            }
        }
        this.resources = [];
    }
}

export { ResourceTracker };