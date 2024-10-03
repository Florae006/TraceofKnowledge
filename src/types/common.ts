export interface KnowledgeListItem {
    knowledgePoints: string,
    knowledgeStatus: string,
    prediction: number,
    spendTime: number,
    lasthint: number,
}

export interface KnowledgeListResp {
    expiredTime: number;
    list: KnowledgeListItem[];
}