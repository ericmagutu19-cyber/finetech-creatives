const STORAGE_KEY = "ftc_proposals";

export function getProposals() {
  const proposals = localStorage.getItem(STORAGE_KEY);

  return proposals ? JSON.parse(proposals) : [];
}

export function saveProposal(proposal) {

  const proposals = getProposals();

  proposals.unshift(proposal);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(proposals)
  );
}

export function updateProposal(updatedProposal) {

  const proposals = getProposals().map((proposal) =>
    proposal.id === updatedProposal.id
      ? updatedProposal
      : proposal
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(proposals)
  );
}

export function deleteProposal(id) {

  const proposals = getProposals().filter(
    proposal => proposal.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(proposals)
  );
}

export function clearProposals() {

  localStorage.removeItem(STORAGE_KEY);

}