import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random',
})
export class RandomPipe implements PipeTransform {
  greetings = [
    { part1: 'Hello ', part2: ' the greatest' },
    { part1: 'Hey ', part2: ', this will be a beautiful day' },
    { part1: 'Cheers ', part2: ', you rock!' },
  ];

  transform(value: unknown): string {
    const elementoAleatorio =
      this.greetings[Math.floor(Math.random() * this.greetings.length)];

    return elementoAleatorio.part1 + value + elementoAleatorio.part2;
  }
}
