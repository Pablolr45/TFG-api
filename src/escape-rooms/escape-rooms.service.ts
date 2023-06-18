import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EscapeRoom, EscapeRoomDocument } from './schemas/escape-room.schema';
import { CajaFuerte } from './elements/CajaFuerte';
import { Llave } from './elements/Llave';
import { Ordenador } from './elements/Ordenador';
import { PadLock } from './elements/PadLock';
import { Palanca } from './elements/Palanca';
import { Pomo } from './elements/Pomo';
import { Fusible } from './elements/Fusible';

@Injectable()
export class EscapeRoomsService {
  constructor(
    @InjectModel('escape-room') private escapeRoomModel: Model<EscapeRoom>,
  ) {}

  async create(escapeRoom: EscapeRoomDocument): Promise<EscapeRoomDocument> {
    //Crea los elementos por defecto de la sala
    const elements = await this.getElements(escapeRoom.sala);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...newEscapeRoom } = escapeRoom;

    const res = await this.escapeRoomModel.create({
      ...newEscapeRoom,
      elements,
    });
    return res;
  }
  async update(id, escapeRoom: EscapeRoomDocument) {
    return await this.escapeRoomModel.findByIdAndUpdate(id, escapeRoom);
  }

  async delete(id: string) {
    return await this.escapeRoomModel.findByIdAndDelete(id);
  }

  async getById(id: string): Promise<EscapeRoomDocument> {
    return await this.escapeRoomModel.findById(id);
  }

  async getAll(): Promise<EscapeRoomDocument[]> {
    return await this.escapeRoomModel.find();
  }

  async getElements(sala: string) {
    const Sala: Record<string, Array<any>> = {
      piso: await this.getPiso(),
    };
    return Sala[sala];
  }

  async getPiso() {
    const cajaFuerte = new CajaFuerte();
    cajaFuerte.elementActive = '111656';
    cajaFuerte.elements = [];
    const llave = new Llave();
    llave.elementPasive = '';
    const ordenador = new Ordenador();
    ordenador.claveActivacion = '';
    ordenador.url = '';
    const palanca = new Palanca();
    palanca.x = 0;
    palanca.y = 0;
    palanca.z = 0;
    const pomo = new Pomo();
    pomo.x = 0;
    pomo.y = 0;
    pomo.z = 0;
    const fusible = new Fusible();
    fusible.elements = [];
    const padlock1 = new PadLock();
    padlock1.code = '';
    padlock1.elementPasive = '';
    const padlock2 = new PadLock();
    padlock2.code = '';
    padlock2.elementPasive = '';
    const padlock3 = new PadLock();
    padlock3.code = '';
    padlock3.elementPasive = '';
    const padlock4 = new PadLock();
    padlock4.code = '';
    padlock4.elementPasive = '';
    return [
      cajaFuerte,
      llave,
      ordenador,
      palanca,
      pomo,
      fusible,
      padlock1,
      padlock2,
      padlock3,
      padlock4,
    ];
  }
}
