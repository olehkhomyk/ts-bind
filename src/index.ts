/**
 * Bind method to class instance.
 *
 * @param target Class instance.
 * @param propertyKey Property Key.
 * @param descriptor Method descriptor.
 */
// tslint:disable:max-line-length
function bind<T extends Function>(target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void {
  // Safe check
  if(!descriptor || (typeof descriptor.value !== 'function')) {
    throw new TypeError(`Only methods can be decorated with @bind. <${propertyKey}> is not a method!`);
  }

  const { set, value, writable, enumerable, configurable } = descriptor;

  return {
    configurable,
    enumerable,
    get(this: T): T {
      const func = value.bind(this);

      // Remember bound function
      Object.defineProperty(this, propertyKey, {
        configurable,
        enumerable,
        writable,
        value: func
      });

      return func;
    },
    set
  };
}

export { bind };
