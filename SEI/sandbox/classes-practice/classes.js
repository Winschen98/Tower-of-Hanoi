class animal {
    constructor(size, name, food){
        this.size = size;
        this.name = name;
        this.food = food; 
    }

    eat(){
        return 'yum yum';
    }
    
    sleep(){
        return 'zzzz';
    }
}

class dog extends animal {
    constructor (size, name, food) {
        super(size, name, food)

        this.attributes = ['loyalty'] 
    }
    speak(){
        return 'woof'
    }
    
}

class cat extends animal {
    constructor (size, name, food){
        super(size, name, food)

        this.attributes = [null]
    }
    speak(){
        return 'meow'
    }
} 

class fish extends animal {
    constructor (size, name, food){
        super(size, name, food)

        this.attributes = ['swimmer', 'fast']
    }
    speak(){
        return undefined
    }
}