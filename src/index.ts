/**
 * Bind method to class instance.
 *
 * @param target
 * @param propertyKey
 * @param descriptor
 */
function bind<T extends () => void>(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
  if (!descriptor || (typeof descriptor.value !== 'function')) {
    throw new TypeError(`Decorator @bind can only decorate method, seems like property: ${propertyKey} is not a method`);
  }

  return {
    configurable: true,
    get(this: T): T {
      const bound =  descriptor.value.bind(this);

      Object.defineProperty(target, propertyKey, {
        configurable: true,
        enumerable: true,
        value: bound
      });

      return bound;
    }
  }
}

export { bind };
