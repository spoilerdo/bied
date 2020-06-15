import { Questionnaire } from '../models/questionnaire/questionnaire.model';
import { QuestionType } from '../enums/question-type.enum';

export const mockQuestionnaire: Questionnaire = {
  id: 'd41d8cd98f00b204e9800998ecf8427e',
  title: 'Vragenlijst inzicht eenzaamheid',
  description:
    '<h2>Vragenlijst eenzaamheid</h2><h6>Wat wordt er in deze vragenlijst gevraagd</h6><p>In deze vragenlijst worden vragen gesteld over de volgende onderwerpen:</p><ul><li>Uw activiteiten buiten huis</li><li>Uw sociale contacten</li><li>Persoonsvragen gericht op eenzaamheid</li></ul><p>Met behulp van dit onderzoek proberen wij de eenzaamheid in de bevolking tegen te gaan. Door deze vragenlijst in te vullen helpt u hierbij het onderzoek. Mocht u de vragen in deze vragenlijst niet begrijpen klik dan op het informatie bolletje naast de vraag, deze geeft extra toelichting.</p><p>Dankuwel voor uw deelname.</p><p>Klik op BEGINNEN om de vragenlijst te beginnen.</p>',
  startButtonText: 'Beginnen',
  endingMessage:
    ' Dankuwel voor het invullen van deze vragenlijst! De vragen met uw antwoorden kunt u terug vinden op uw dashboard.',

  questionnaireSections: [
    {
      id: 0,
      title: 'Sectie: persoonlijke vragen',
      questions: [
        {
          id: '0',
          type: QuestionType.LIKERT,
          question: [
            {
              id: '0',
              question: 'Ik ben graag samen met anderen',
              answer: '',
            },
          ],
          information: '',
          answer: '',
        },
        {
          id: '1',
          type: QuestionType.MULTIPLE_CHOICE,
          question: 'Welke seizoenen ervaart u als prettig?',
          options: [{ name: 'Lente' }, { name: 'Zomer' }, { name: 'Herfst' }, { name: 'Winter' }],
          information: 'Er wordt gevraagd bij welke seizoenen u een prettig gevoel ervaard',
          answer: [],
        },
        {
          id: '2',
          type: QuestionType.OPEN_TEXT,
          question: 'Waarom vind u deze seizoenen prettig?',
          answer: '',
        },
        {
          id: '3',
          type: QuestionType.NUMERICAL,
          question: 'Hoe vaak per week gaat u op visite?',
          information: 'Er wordt gevraagd hoevaak u per week op bezoek gaat bij vrienden/familie.',
          answer: '',
        },
        {
          id: '4',
          type: QuestionType.NUMERICAL,
          question: 'Hoe vaak per week komen er mensen bij u op visite?',
          information: 'Er wordt gevraagd hoevaak vrienden/familie bij u op bezoek komen.',
          answer: '',
        },
        {
          id: '5',
          type: QuestionType.DROPDOWN,
          question: 'Waar gaat u meestal uit eten?',
          options: [{ name: 'Restaurant' }, { name: 'All you can eat' }, { name: 'Snackbar' }],
          information: 'Er wordt gevraagd in wat voor een restaurant u meestal uit eten gaat.',
          answer: '',
        },
        {
          id: '6',
          type: QuestionType.RADIO,
          question: 'Hoe ziet uw thuis situatie eruit?',
          options: [{ name: 'Getrouwd' }, { name: 'Samenwonend' }, { name: 'Alleenstaand' }],
          information: 'Er wordt gevraagd om uw burgelijke status.',
          answer: '',
        },
        {
          id: '7',
          type: QuestionType.DATE,
          question: 'Wat is de laatste keer dat u uit eten bent geweest?',
          information: 'Er wordt om een datum gevraagd.',
          answer: null,
        },
        {
          id: '8',
          type: QuestionType.TIME,
          question: 'Hoelaat staat u gemiddeld op?',
          information: 'Er wordt om een tijd gevraagd.',
          answer: null,
        },
      ],
    },
    {
      id: 1,
      title: 'Sectie LIKERT vragen',
      questions: [
        {
          id: '7',
          type: QuestionType.LIKERT,
          question: [
            {
              id: '8',
              question: 'Ik ga graag uit eten',
              answer: '',
            },
            {
              id: '9',
              question: 'Ik kom graag buiten',
              answer: '',
              information: 'De stad, wandeling, reis',
            },
            {
              id: '10',
              question: 'Ik ga graag naar sociale activiteiten',
              answer: '',
            },
            {
              id: '11',
              question: 'Ik ga graag naar de bioscoop',
              answer: '',
            },
            {
              id: '12',
              question: 'Ik ben graag alleen',
              answer: '',
            },
            {
              id: '13',
              question: 'Ik ben vaak omringd door anderen',
              answer: '',
            },
          ],
          information: '',
          answer: '',
        },
      ],
    },
  ],
  currentQuestionnaireSectionId: 0,
};
