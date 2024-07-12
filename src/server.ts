import cors from '@fastify/cors';
import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { confirmParticipants } from "./routes/confirm-participants";
import { confirmTrip } from "./routes/confirm-trip";
import { getActivities } from "./routes/get-activities";
import { createActivity } from "./routes/create-activity";
import { createLink } from "./routes/create-link";
import { createTrip } from "./routes/create-trip";
import { getLinks } from './routes/get-links';
import { getParticpants } from './routes/get-participants';
import { createInvite } from './routes/create-invite';
import { updateTrip } from './routes/update-trip';
import { geTripDetails } from './routes/get-trip-details';
import { getParticpant } from './routes/get-participant';
import { errorHandler } from './error-handler';
import { env } from '../env';

const app = fastify();

app.register(cors, {
  origin: '*'
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler);

app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipants);
app.register(createActivity);
app.register(getActivities);
app.register(createLink);
app.register(getLinks);
app.register(getParticpants);
app.register(createInvite);
app.register(updateTrip);
app.register(geTripDetails);
app.register(getParticpant);

app.listen({ port: env.PORT }).then(() => {
  console.log('Server running!');
});