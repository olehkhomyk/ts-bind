# ts-bind

@ts-bind decorator

To bind method to class instance.

Example:

    import { bind } from 'ts-bind';
    
    class MyClass {
    
        private prop: string;

        constructor(value) {
            this.prop = value;
        }
    
        // Here ypu bind the method to MyClass.
        // And method logProp will always calls with MyClass context.
        @bind
        public logProp(): void {
            console.log(this.prop);
        };
    }
    
    const myClass = new MyClass('test value');

    // Here context is not lost.
    const { logProp } = myClass;
    // And you still get correct method output.
    logProp(); // Output: 'test value';


