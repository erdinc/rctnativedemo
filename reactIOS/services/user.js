
export default class User {
    
    public static entity = null;
    
    login(options) {
        var {username, password} = options;
        
        // imitating server request
        return new Promise((resolve, reject) => {
            resolve({username, password});
        });
    }
    
    logout() {
        this.entity = null;
    }
}