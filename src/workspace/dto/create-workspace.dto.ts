import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateWorkspaceDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 20)
  name: string;

  @IsString()
  description: string;
}
