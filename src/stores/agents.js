import { defineStore } from "pinia";

import { useRoute, useRouter } from "vue-router";

import agentsReport from '@/helper/agent-report.js';


const useAgents = defineStore("useAgents", {
	state: () => ({
		schema1: {},
		schema2: {},
		schema3: {},
		schema4: {},
		schema5: {},
		schema6: {},
		schemaStatus1: false,
		schemaStatus2: false,
		schemaStatus3: false,
		schemaStatus4: false,
		schemaStatus5: false,
		schemaStatus6: false,
		aiMessage: "Check your Connections Please",
		question: "",
		questions: [],
		answer: "",
		isLoading: true,
		isReportPrepering:false,
		isStartReporting:false,
		showPage: false,
		currentQuestionIndex: 0,
		submittedAnswers: [],
		displayedQuestion: "",
		isReadyToGenerate: false,
		asks_answers: [],
		answers_form: {},
		textError: "",
		agents: [],
		subAgents: [],
		agent: {},
		subAgent: {},
		quetionsAgents: [],
		reportText: "",
		reportSession: {},
		reportData: {},
		typingInterval: null,
		route: useRoute(),
		router: useRouter(),


		queryIndex: 0,
		showOverlay: false,
		text: "",
		textError: "",
		progress: 0,
		progressInterval: null,
		report_type: 1,
		reportText:'',
		token: localStorage.getItem("token") || "",
		showExitModal: false,
		hasUnsavedChanges: false,
		nextRoute: null,
		pendingNavigationEvent: null,
		router: useRouter(),
		model: {
			name: "BM",
			id: 1,
			models: [
				{
					id: 1,
					name: "llama3.1-70b-isntruct",
					value: "llama3.1:70b-instruct-q2_k",
					source: "o",
				},
				{ id: 2, name: "gemma2:9b", value: "gemma2:9b", source: "o" },
				{
					id: 3,
					name: "llama3.1-8b",
					value: "llama3.1:latest",
					source: "o",
				},
				{
					id: 4,
					name: "llama3.2-latest",
					value: "llama3.2:latest",
					source: "o",
				},
				{
					id: 5,
					name: "llama3.2:3b",
					value: "llama3.2:3b",
					source: "o",
				},
			],
		},
		flag: "forground",
		report_status: "Save Report",
		selectedModel: [
			{
				id: 1,
				name: "llama3.1-70b-isntruct",
				value: "llama3.1:70b-instruct-q2_k",
				source: "o",
			},
			{ id: 2, name: "gemma2:9b", value: "gemma2:9b", source: "o" },
			{
				id: 3,
				name: "llama3.1-8b",
				value: "llama3.1:latest",
				source: "o",
			},
			{
				id: 4,
				name: "llama3.2-latest",
				value: "llama3.2:latest",
				source: "o",
			},
			{ id: 5, name: "llama3.2:3b", value: "llama3.2:3b", source: "o" },
		],
		autoagentsTitles:{
			'Proposal ':'show some suggestions for my secure ai agent',
			'Planning':'create a plan for building an ai secure agent',
			'Competitor analysis':'Show 3 competitors for my secure AI agent with features and how to stand out',
			'Reports':'create a report about how to build an ai secure agent',
			'Recommendation':'Give recommendations to improve my secure AI agent',
		}
	}),

	actions: {
        getStaticReport(index){
            return agentsReport[index]
        }
    }
	
});

export default useAgents;

