'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT_EXPO } from '@/lib/motion';

export type AgentChatMessage = {
  readonly from: 'lead' | 'agent';
  readonly text: string;
};

// Classes completas por remetente — nunca construir via template string:
// o scanner do Tailwind não enxerga classes dinâmicas e purga as regras
// de @layer components no build (bug real que apagou lead/agent no ar).
const bubbleClass: Record<AgentChatMessage['from'], string> = {
  lead: 'agent-chat__bubble agent-chat__bubble--lead',
  agent: 'agent-chat__bubble agent-chat__bubble--agent',
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.55, delayChildren: 0.2 },
  },
};

const bubble = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT_EXPO },
  },
};

export function AgentChat({ messages }: { messages: readonly AgentChatMessage[] }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className="agent-chat" aria-label="Exemplo ilustrativo de conversa do agente">
        {messages.map((message) => (
          <p key={message.text} className={bubbleClass[message.from]}>
            {message.text}
          </p>
        ))}
        <p className="agent-handoff">
          <span aria-hidden className="agent-handoff__pulse" />
          Transferindo para a equipe
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="agent-chat"
      aria-label="Exemplo ilustrativo de conversa do agente"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      {messages.map((message) => (
        <motion.p
          key={message.text}
          className={bubbleClass[message.from]}
          variants={bubble}
          style={{ transformOrigin: message.from === 'agent' ? 'bottom right' : 'bottom left' }}
        >
          {message.text}
        </motion.p>
      ))}
      <motion.p className="agent-handoff" variants={bubble} style={{ transformOrigin: 'bottom right' }}>
        <span aria-hidden className="agent-handoff__pulse" />
        Transferindo para a equipe
      </motion.p>
    </motion.div>
  );
}
