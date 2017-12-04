export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;

  nextName() {
    return this.age + 1;
  }
}
