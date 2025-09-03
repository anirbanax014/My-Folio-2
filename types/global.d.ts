// Global type declarations for packages without TypeScript support

declare module 'aos' {
  export function init(options?: any): void;
  export function refresh(): void;
  export function refreshHard(): void;
}

declare module 'emailjs-com' {
  export function send(serviceID: string, templateID: string, variables: any, userID?: string): Promise<any>;
  export function sendForm(serviceID: string, templateID: string, form: HTMLFormElement, userID?: string): Promise<any>;
  export function init(userID: string): void;
}

declare module 'react-particles' {
  import { Component } from 'react';
  export default class Particles extends Component<any, any> {}
}

declare module 'tsparticles-slim' {
  export function loadSlim(engine: any): Promise<void>;
}

declare module 'tsparticles-engine' {
  export interface Engine {}
  export interface Container {}
}

declare module 'lottie-react' {
  import { Component } from 'react';
  export default class Lottie extends Component<any, any> {}
}

declare module '*.glsl' {
  const content: string;
  export default content;
}

declare module '*.vs' {
  const content: string;
  export default content;
}

declare module '*.fs' {
  const content: string;
  export default content;
}

declare module '*.vert' {
  const content: string;
  export default content;
}

declare module '*.frag' {
  const content: string;
  export default content;
}