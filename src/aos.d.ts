declare module 'aos' {
    interface AosOptions {
      duration?: number;
      once?: boolean;
    }
  
    const AOS: {
      init: (options?: AosOptions) => void;
    };
  
    export default AOS;
  }