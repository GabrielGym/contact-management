import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, ContactsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
