export interface Question {
    id: string
    question: string
    options: QuestionOption[]
}

export interface QuestionOption {
    id: string
    text: string
    icon?: string
    next?: string // Next question ID
    result?: string // Result page ID
}

export const questionTree: Record<string, Question> = {
    q1: {
        id: 'q1',
        question: 'What brings you here today?',
        options: [
            {
                id: 'property',
                text: "I'm buying or selling property with environmental concerns",
                icon: '🏢',
                next: 'q2_property',
            },
            {
                id: 'sewer',
                text: 'I have a sewer odor or gas problem',
                icon: '🚨',
                next: 'q2_sewer',
            },
            {
                id: 'legal',
                text: 'I need an expert witness for a legal case',
                icon: '⚖️',
                next: 'q2_legal',
            },
            {
                id: 'contamination',
                text: 'I need to address contamination at a site',
                icon: '🧪',
                next: 'q2_contamination',
            },
            {
                id: 'consulting',
                text: "I'm looking for specialized environmental consulting",
                icon: '📊',
                next: 'q2_consulting',
            },
        ],
    },

    // Property transaction branch
    q2_property: {
        id: 'q2_property',
        question: 'What stage are you in?',
        options: [
            {
                id: 'phase1',
                text: 'I need a Phase I Environmental Site Assessment (due diligence)',
                result: 'phase1_assessment',
            },
            {
                id: 'phase2',
                text: 'Phase I found contamination, I need Phase II investigation',
                result: 'phase2_investigation',
            },
            {
                id: 'remediation',
                text: 'I need remediation/cleanup design',
                result: 'remediation_design',
            },
            {
                id: 'unsure_property',
                text: "I'm not sure what I need",
                result: 'general_consultation',
            },
        ],
    },

    // Sewer branch
    q2_sewer: {
        id: 'q2_sewer',
        question: 'How urgent is your situation?',
        options: [
            {
                id: 'emergency',
                text: 'Emergency (active complaints, regulatory notice)',
                icon: '🚨',
                next: 'q3_sewer_emergency',
            },
            {
                id: 'planning',
                text: 'Planning ahead (budget for next fiscal year)',
                icon: '📅',
                result: 'sewer_planning',
            },
            {
                id: 'routine',
                text: 'Routine monitoring',
                icon: '📊',
                result: 'sewer_routine',
            },
        ],
    },

    q3_sewer_emergency: {
        id: 'q3_sewer_emergency',
        question: 'What type of facility?',
        options: [
            {
                id: 'municipal',
                text: 'Municipal sewer system',
                result: 'sewer_emergency_municipal',
            },
            {
                id: 'industrial',
                text: 'Industrial facility',
                result: 'sewer_emergency_industrial',
            },
            {
                id: 'residential',
                text: 'Multi-family residential',
                result: 'sewer_emergency_residential',
            },
            {
                id: 'commercial',
                text: 'Commercial building',
                result: 'sewer_emergency_commercial',
            },
        ],
    },

    // Legal branch
    q2_legal: {
        id: 'q2_legal',
        question: 'What type of case?',
        options: [
            {
                id: 'groundwater',
                text: 'Groundwater contamination',
                next: 'q3_legal_stage',
            },
            {
                id: 'vapor',
                text: 'Vapor intrusion',
                next: 'q3_legal_stage',
            },
            {
                id: 'remediation_cost',
                text: 'Remediation cost dispute',
                next: 'q3_legal_stage',
            },
            {
                id: 'oil_gas',
                text: 'Oil & gas spills',
                next: 'q3_legal_stage',
            },
            {
                id: 'chromium',
                text: 'Chromium VI or heavy metals',
                next: 'q3_legal_stage',
            },
            {
                id: 'other_legal',
                text: 'Other environmental issue',
                next: 'q3_legal_stage',
            },
        ],
    },

    q3_legal_stage: {
        id: 'q3_legal_stage',
        question: 'What stage is the case in?',
        options: [
            {
                id: 'early',
                text: 'Early case evaluation (need expert report)',
                result: 'expert_witness_early',
            },
            {
                id: 'discovery',
                text: 'Discovery/deposition preparation',
                result: 'expert_witness_discovery',
            },
            {
                id: 'trial',
                text: 'Trial testimony needed',
                result: 'expert_witness_trial',
            },
            {
                id: 'opposing',
                text: 'Opposing counsel consultation',
                result: 'expert_witness_opposing',
            },
        ],
    },

    // Contamination branch
    q2_contamination: {
        id: 'q2_contamination',
        question: 'What type of contamination?',
        options: [
            {
                id: 'petroleum',
                text: 'Petroleum hydrocarbons (gasoline, diesel, oil)',
                result: 'contamination_petroleum',
            },
            {
                id: 'solvents',
                text: 'Chlorinated solvents (PCE, TCE)',
                result: 'contamination_solvents',
            },
            {
                id: 'metals',
                text: 'Heavy metals (chromium, lead, arsenic)',
                result: 'contamination_metals',
            },
            {
                id: 'perchlorate',
                text: 'Perchlorate or explosives',
                result: 'contamination_perchlorate',
            },
            {
                id: 'unsure_contamination',
                text: "I'm not sure / multiple contaminants",
                result: 'contamination_general',
            },
        ],
    },

    // Consulting branch
    q2_consulting: {
        id: 'q2_consulting',
        question: 'What type of consulting do you need?',
        options: [
            {
                id: 'forensic',
                text: 'Forensic geology / contaminant source identification',
                result: 'consulting_forensic',
            },
            {
                id: 'regulatory',
                text: 'Regulatory compliance support',
                result: 'consulting_regulatory',
            },
            {
                id: 'training',
                text: 'Training / workshops',
                result: 'consulting_training',
            },
            {
                id: 'peer_review',
                text: 'Peer review of technical reports',
                result: 'consulting_peer_review',
            },
            {
                id: 'other_consulting',
                text: 'Other specialized service',
                result: 'general_consultation',
            },
        ],
    },
}
